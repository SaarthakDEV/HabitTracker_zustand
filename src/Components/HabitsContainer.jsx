import React, { useState } from 'react'
import useStore from '../store'
import { Button, Heading, Input } from '../Styles/style'

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
        <Heading>
        Total Number of running habits : {noOfHabits}
        </Heading>
        {
            habits?.map(habit => <p>{habit.title}</p>)
        }
        <Input type="text" value={habitText} onChange={e => setHabitText(e.target.value)}/>
        <Button type='submit' onClick={handleAddHabit}>Add Habit</Button>
    </>
  )
}

export default HabitsContainer