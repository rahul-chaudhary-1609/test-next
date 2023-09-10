export default function CourseNo(props){
    let {params} = props;
    console.log("props",props)
    return (<>
        Course no {params.courseno}
    </>)
}