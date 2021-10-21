import { createContext, FC, useContext, useEffect, useState } from 'react';
import { getAllTasksList } from '../api/ToDosListsHandler';

export type SingleTask = {
  id: number;
  name: string;
  isDone: boolean;
};

export type SingleListModel = {
  id?: any;
  name: string;
  created_at?: any;
  task: SingleTask[];
};

type ToDoListsState = {
  toDosLists: SingleListModel[];
  setToDosLists: any;
  fetchList: any;
  deleteListFromState: any;
};

export const ToDosListContext = createContext<Partial<ToDoListsState>>({});

export const useToDoLists = () => {
  const toDosLists = useContext(ToDosListContext);

  if (!toDosLists) throw new Error('useToDosList must be used inside ToDosListsProvider');

  return toDosLists;
};

export const ToDosListsProvider: FC = ({ children }) => {
  const [toDosLists, setToDosLists] = useState<SingleListModel[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllTasksList();
      setToDosLists(response);
    })();
  }, []);

  const deleteListFromState = (idToDelete: number): void => {
    const result: SingleListModel[] = toDosLists.filter((item: SingleListModel) => item.id !== idToDelete);
    setToDosLists(result);
  };

  return (
    <ToDosListContext.Provider
      value={{
        toDosLists,
        deleteListFromState,
        setToDosLists,
      }}
    >
      {children}
    </ToDosListContext.Provider>
  );
};
