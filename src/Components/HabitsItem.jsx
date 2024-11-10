import React, { useState } from 'react'
import useStore from '../store'
import { Status_Button, Button } from '../Styles/style';

const HabitsItem = ({ habit }) => {
  const { toggleHabit, deleteHabit } = useStore();
  const [ deleteStatus, setDeleteStatus] = useState(false);
  const handleDeleteClick = (id) => {
    setDeleteStatus(true);
    setTimeout(() => {
      setDeleteStatus(false)
      deleteHabit(id)
    }, 1000);
  }

  return (
    <tr>
      <td>
        {habit.id}
      </td>
      <td>
        <p style={{color: 'white', textDecoration: deleteStatus && 'line-through'}}>{habit.title}</p></td>
      <td>
        <Status_Button color={habit.color}>
          {`${habit.completed}`}
        </Status_Button>
      </td>
      <td>
        <Button bgColor='#ffbc00' color='black' onClick={() => toggleHabit(habit.id)}>Toggle</Button>
        <Button bgColor='#007bff' onClick={() => handleDeleteClick(habit.id)}>Delete</Button>
      </td>
    </tr>
  )
}

export default HabitsItem