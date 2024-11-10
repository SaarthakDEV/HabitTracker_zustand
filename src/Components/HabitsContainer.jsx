import React, { useState } from 'react'
import useStore from '../store'
import { Button, Heading, Input, Table, InputBox, Navbar } from '../Styles/style'
import HabitsItem from './HabitsItem'

const HabitsContainer = () => {
    const [habitText, setHabitText] = useState('')
    const { habits, noOfHabits, addHabit } = useStore();

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
        <Navbar>
        Total Number of running habits : {noOfHabits}
        </Navbar>
        <Heading>Habit Tracker</Heading>
        <InputBox>
        <Input type="text" value={habitText} onChange={e => setHabitText(e.target.value)}/>
        <Button bgColor='#343a40' type='submit' onClick={handleAddHabit}>Add Habit</Button>
        </InputBox>
        <Table>
            <tr>
                <td>S. No.</td>
                <td>HABIT</td>
                <td>STATUS</td>
                <td>ACTIONS</td>
            </tr>
        {
            habits?.map(habit => 
                <HabitsItem habit={habit} key={habit.id}/>
            )
        }
        </Table>
    </>
  )
}

export default HabitsContainer