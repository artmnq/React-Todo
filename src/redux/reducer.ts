import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemType {
  id: number;
  item: string;
  completed: boolean;
}

export type StoreType = ItemType[];

const initialState: StoreType = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: StoreType, action: PayloadAction<ItemType>) => {
      state.push(action.payload);
    },
    removeTodo: (state: StoreType, action: PayloadAction<number>) => {
      return state.filter((item: ItemType) => item.id !== action.payload);
    },
    updateTodo: (state: StoreType, action: PayloadAction<ItemType>) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodo: (state: StoreType, action: PayloadAction<number>) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;
