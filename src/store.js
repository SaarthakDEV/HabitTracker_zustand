import { create } from 'zustand';


const useStore = create((set,get) => ({
    habits: [{
        id: 1,
        title: 'Test habit',
        completed: false,
        color: 'red'
    }],
    noOfHabits: 1,
    addHabit: (newHabit) => {
        console.log(newHabit)
        const habits = get().habits;
        newHabit.id = habits.length + 1
        set(state => ({habits: [...state.habits,newHabit]}));
        set(state => ({noOfHabits: state.noOfHabits + 1}))
    },
    toggleHabit: (habitId) => {
        const habits = get().habits;
        const newHabits = habits.map(habit => {
            if(habit.id === habitId){
                habit.completed = !habit.completed
                habit.color = habit.color === 'red' ? 'green' : 'red'
            }
            return habit
        });
        set(state => ({ habits: newHabits}))
    },
    deleteHabit: (habitId) => {
        const habits = get().habits;
        const newHabits = habits.filter(habit => habit.id !== habitId);
        set(state => ({habits: newHabits}))
        set(state => ({noOfHabits: state.noOfHabits - 1}))
    }
}))

export default useStore;    