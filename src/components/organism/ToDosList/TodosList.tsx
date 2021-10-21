import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { SortBtn } from '../../atoms/SortBtn/SortBtn';
import { AddBtn } from '../../atoms/AddBtn/AddBtn';
import { ItemListsWrapper, SearchSectionWrapper, ListWrapper, Paragraph } from './TodosList.styles';
import { useModal } from '../Modal/useModal';
import { SingleListModel, useToDoLists } from '../../../providers/ToDosListsProvider';
import { ToDoListItem } from '../../molecules/ToDoListItem/ToDoListItem';
import { useState } from 'react';

export const TodosList = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  const { toDosLists } = useToDoLists();
  const initialListItemState: SingleListModel = {
    name: '',
    task: [],
  };
  const [currentListItem, setCurrentListItem] = useState<SingleListModel>(initialListItemState);

  return (
    <ItemListsWrapper>
      <SearchSectionWrapper>
        <SearchBar />
        <SortBtn />
      </SearchSectionWrapper>
      <ListWrapper>
        {toDosLists?.length !== 0 ? (
          toDosLists?.map((todoItem) => {
            return (
              <ToDoListItem
                onClick={() => {
                  handleOpenModal();
                  setCurrentListItem(todoItem);
                }}
                key={todoItem.id}
                toDosList={todoItem}
              />
            );
          })
        ) : (
          <Paragraph>This list is empty</Paragraph>
        )}
        {isOpen ? <Modal listItem={currentListItem} handleCloseModal={handleCloseModal} /> : null}

        <AddBtn
          handleClick={() => {
            handleOpenModal();
            setCurrentListItem(initialListItemState);
          }}
        />
      </ListWrapper>
    </ItemListsWrapper>
  );
};
