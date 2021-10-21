import { SingleListModel, useToDoLists } from '../../../providers/ToDosListsProvider';
import { deleteList, getAllTasksList } from '../../../api/ToDosListsHandler';
import { ItemWrapper, ListName } from './ToDoLisItem.style';

interface ToDoListItemProps {
  toDosList: SingleListModel;
  onClick: any;
}

export const ToDoListItem = ({ toDosList, onClick }: ToDoListItemProps) => {
  const { setToDosLists } = useToDoLists();

  const handleDelete = async (idToDelete: number) => {
    await deleteList(idToDelete);
    const response = await getAllTasksList();
    await setToDosLists(response);
  };
  return (
    <ItemWrapper>
      <ListName onClick={onClick}>{toDosList.name}</ListName>
      <span>Created at:{toDosList.created_at}</span>
      <button
        onClick={async () => {
          await handleDelete(toDosList.id);
        }}
      >
        Delete List
      </button>
    </ItemWrapper>
  );
};
