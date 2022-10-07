/*
const Todo = function(){
    this.id = id; // 유일값 아무래도 심볼이 좋지않을까?
    this.title = title; // 문자열 투두의 제목
    this.content = content; //문자열 투두의 내용
    this.done = false; //boolean
    this.done_date = null; //done이 false로 바뀌는 순간 등록
    this.reg_date = new Date(); // 생성과 동시에 
    
    this.todo_list_id = todo_list_id; // 들어가야할 할일목록의 번호 참조키?
};
*/
class Todo {
    constructor(){
        this.id = id; // 유일값 아무래도 심볼이 좋지않을까?
        this.title = title; // 문자열 투두의 제목
        this.content = content; //문자열 투두의 내용
        this.done = false; //boolean
        this.done_date = null; //done이 false로 바뀌는 순간 등록
        this.reg_date = new Date(); // 생성과 동시에 
        
        this.todo_list_id = todo_list_id; // 들어가야할 할일목록의 번호 참조키?
    }
}
/*
const TodoList = function(){
    this.id = id; // 유일값 아무래도 심볼이 좋겠지? 
    this.title = title; // 할일 목록의 제목
    this.description = description; // 할일 목록의 설명
    this.reg_date = new Date(); // 목록이 생성된 날짜.
}
*/
class TodoList {
    constructor(){
        this.id = id; // 유일값 아무래도 심볼이 좋겠지? 
        this.title = title; // 할일 목록의 제목
        this.description = description; // 할일 목록의 설명
        this.reg_date = new Date(); // 목록이 생성된 날짜.
    }
}