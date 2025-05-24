
export enum status{
    Completed= 'completed',
    Pending = 'pending'


}
export interface ITodo{
    task:String,
    deadLine:String,
    status:status
}