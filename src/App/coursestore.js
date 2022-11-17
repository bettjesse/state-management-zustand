import create from "zustand";
import { devtools, persist } from "zustand/middleware"

const coureStore = (set) => (
    {
        //initial state
        courses: [],
        //actions or manipulators to the data
        addCourse: (course) => {
            set(state => ({
                courses: [course, ...state.courses]
            }))

        },
// removeCourse action
        removeCourse:(courseId)=>{
            set(state=> ({
               courses: state.courses.filter((c)=> c.id !== courseId)
            }))
        },
        //toggleCourse action
        toggleCourseStatus: (courseId)=> {
            set(state=>({
                courses: state.courses.map(course=> course.id=== courseId ?{...course,completed: !course.completed} :course)
            }))
        }
    }
)
const useCourseStore= create(
    devtools(
        persist(coureStore,{
            name:"courses"})
    )
)

export default useCourseStore;