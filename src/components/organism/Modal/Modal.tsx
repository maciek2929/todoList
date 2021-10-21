import ReactDOM from 'react-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalWrapper } from './Modal.styles';
import { ActionBtn } from '../../atoms/ActionBtn/ActionBtn';
import { ModalInput, AddTasksWrapper, MainBtnsContainer, NameWrapper, StyledHr } from './Modal.styles';
import { SingleTask } from '../../molecules/SingleTask/SingleTask';
import { saveTasksList } from '../../../api/SaveListHandler';
import { SingleListModel, useToDoLists } from '../../../providers/ToDosListsProvider';
import { getAllTasksList, updateItem } from '../../../api/ToDosListsHandler';
import { useError } from '../../molecules/ErrorMessage/useError';

const modalContainer = document.getElementById('modal-container');
export interface ToDosModel {
  name: string;
  isDone: boolean;
}

export type sendToApiExperimentType = {
  name: string;
  tasks: ToDosModel[];
};

type ModalProps = {
  handleCloseModal: any;
  listItem?: SingleListModel;
};

const initialToDoTask: ToDosModel = {
  name: '',
  isDone: false,
};
const modalNode = document.createElement('div');
export const Modal = ({ handleCloseModal, listItem }: ModalProps) => {
  const [todos, setTodos] = useState<ToDosModel[]>([{ ...initialToDoTask }]);
  const [listName, setListName] = useState(listItem.name);
  const { setToDosLists } = useToDoLists();
  const { dispatchError } = useError();

  const handleTaskNameChanged = useCallback(
    (index: number) => (newTaskName: string) =>
      setTodos(todos.map((todosItem, i) => (i === index ? { ...todosItem, name: newTaskName } : todosItem))),
    [todos]
  );

  const handleTaskCheckedChanged = useCallback(
    (index: number) => (isChecked: boolean) => setTodos(todos.map((toDosItem, i) => (i === index ? { ...toDosItem, isDone: isChecked } : toDosItem))),
    [todos]
  );

  const handleAdd = () => {
    setTodos([...todos, { ...initialToDoTask }]);
  };

  const handleListNameChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setListName(e.target.value), []); //@Todo this should be a problem dependencie list

  useEffect(() => {
    modalContainer?.appendChild(modalNode);

    return () => {
      modalContainer?.removeChild(modalNode);
    };
  }, []);

  const combinedStateObj: sendToApiExperimentType = {
    name: listName,
    tasks: todos,
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (listItem.id) {
        await updateItem(combinedStateObj, listItem.id);
        console.log('update');
      } else {
        await saveTasksList(combinedStateObj);
      }

      const response = await getAllTasksList();
      await setToDosLists(response);
    } catch (e) {
      dispatchError(e.message);
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper as="form" onSubmit={handleSubmit}>
      <NameWrapper>
        <ModalInput placeholder="List name" name="name" value={listName} onChange={handleListNameChanged} />
        <StyledHr />
      </NameWrapper>

      {todos.map((todo, index) => {
        return (
          <SingleTask
            key={index}
            isChecked={todo.isDone}
            taskName={todo.name}
            onTaskNameChanged={handleTaskNameChanged(index)}
            onCheckedChange={handleTaskCheckedChanged(index)}
          />
        );
      })}

      <AddTasksWrapper>
        <ActionBtn name="cancel" styles={{ color: 'withe', width: '100px', height: '40px', background: 'rgba(255, 61, 0, 1)' }} />
        <ActionBtn
          name="ADD"
          styles={{ color: 'withe', width: '100px', height: '40px', background: 'rgba(255, 153, 0, 1)' }}
          func={handleAdd}
          type="button"
        />
      </AddTasksWrapper>
      <MainBtnsContainer>
        <ActionBtn
          name="CANCEL"
          styles={{ width: '130px', height: '50px', background: 'rgba(45, 45, 45, 1)', border: 'none', color: 'orange', fontSize: '50px' }}
          type="button"
          func={handleCloseModal}
        />
        <ActionBtn
          name="SAVE"
          styles={{ width: '130px', height: '50px', background: 'rgba(255, 153, 0, 1)', color: 'white', fontSize: '50px', margin: '10px' }}
          type="submit"
          func={handleCloseModal}
        />
      </MainBtnsContainer>
    </ModalWrapper>,
    modalNode
  );
};
