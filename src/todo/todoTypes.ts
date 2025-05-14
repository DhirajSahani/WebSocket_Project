
export enum status{
    Completed= 'completed',
    Pending = 'pending'


}
export interface ITodo{
    task:String,
    deadline:String,
    status:status
}