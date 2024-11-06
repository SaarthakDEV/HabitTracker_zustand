import React, { useState } from 'react'
import useStore from '../store'

const HabitsContainer = () => {
    const [habitText, setHabitText] = useState('')
    const { habits, noOfHabits, addHabit} = useStore();

    const handleAddHabit = (e) => {
        e.preventDefault();
        const newHabitObject = {
            title: habitText,
            color: 'red',
            completed: false
        }
        addHabit(newHabitObject)
        setHabitText('');
    }
  return (
    <>
        <h1>
        {noOfHabits}
        </h1>
        {
            habits?.map(habit => <p>{habit.title}</p>)
        }
        <input type="text" value={habitText} onChange={e => setHabitText(e.target.value)}/>
        <button type='submit' onClick={handleAddHabit}>Add Habit</button>
    </>
  )
}

export default HabitsContainer