import Realm from 'realm';
import { getRealm } from '../../services/local/pokemonstorageservice';
export const TODOLIST_SCHEMA = "TodoList";
export const TODO_SCHEMA = "Todo";
// Define your models and their properties
export const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        name: 'string',
    }
};
export const TodoListSchema = {
    name: TODOLIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        type: "string",
        expenseDate: "string",
        additionalInfo: "string?", //? makes the property optional
        expenseSum: "string",
        picture: "string?",
        todos: { type: 'list', objectType: TODO_SCHEMA },
    }
};


const databaseOptions = {
    path: 'expenseApp.realm',
    schema: [TodoListSchema, TodoSchema],
    schemaVersion: 0, //optional    
};
//functions for TodoLists



export const deleteTodo = todoId => new Promise((resolve, reject) => {    
    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            
            let deletingTodo = realm.objectForPrimaryKey(TODO_SCHEMA, todoId);
            realm.delete(deletingTodo);
            
            
            resolve();   
        });
    }).catch((error) => reject(error));;
});

export const updateTodo = todo => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let updatingTodo = realm.objectForPrimaryKey(TODO_SCHEMA, todo.id);   
            updatingTodo.name = todo.name; 
              
            resolve();     
        });
    }).catch((error) => reject(error));;
});
export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(TODOLIST_SCHEMA, newTodoList);
            resolve(newTodoList);
        });
    }).catch((error) => reject(error));
});
export const updateTodoList = todoList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);   
            updatingTodoList.name = todoList.name;    
            resolve();     
        });
    }).catch((error) => reject(error));;
});
export const deleteTodoList = todoListId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
            realm.delete(deletingTodoList);
            resolve();   
        });
    }).catch((error) => reject(error));;
});
export const deleteAllTodoLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let allTodoLists = realm.objects(TODOLIST_SCHEMA);
            realm.delete(allTodoLists);
            resolve();
        });
    }).catch((error) => reject(error));;
});
export const queryAllTodoLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let allTodoLists = realm.objects(TODOLIST_SCHEMA);
        resolve(allTodoLists);  
    }).catch((error) => {        
        reject(error);  
    });;
});
export default new Realm(databaseOptions);