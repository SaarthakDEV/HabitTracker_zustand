import { create } from 'zustand';


const useStore = create((set,get) => ({
    habits: [],
    noOfHabits: 0,
    addHabit: (newHabit) => {
        const habits = get().habits;
        newHabit.id = habits.length
        set(state => ({habits: [...state.habits,newHabit]}));
        set(state => ({noOfHabits: state.noOfHabits + 1}))
    },
    toggleHabit: (habitId) => {
        const habits = get().habits;
        const newHabits = habits.map(habit => {
            if(habit.id == habitId){
                habit.completed = !habit.completed
                habit.color = habit.color === 'red' ? 'green' : 'red'
            }
            return habit
        });
        set(state => ({ habits: newHabits}))
    }
}))

export default useStore;    