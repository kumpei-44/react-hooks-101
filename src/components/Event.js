import React, {useContext} from 'react';

import {
  ADD_OPERATION_LOG,
  DELETE_EVENT,
} from '../actions';
import AppContext from '../contexts/AppContext';
import {timeCurrentIso8601} from '../utils';

const Event = ({event}) => {
  const {dispatch} = useContext(AppContext);
  const handleClickDelete = () => {
    const result = window.confirm(`id=${event.id}のイベントを本当に削除しても良いですか？`);
    if (result) {
      dispatch({type: DELETE_EVENT, id: event.id})
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${event.id}を削除しました。)`,
        operatedAt: timeCurrentIso8601(),

      })
    }
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDelete}>削除</button></td>
    </tr>
  )
}

export default Event;