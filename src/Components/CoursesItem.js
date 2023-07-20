import React from 'react';

export default function CoursesItem (props) {
  return (
    <div className="cursor-pointer border-2 border-gray-300  rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
        <a href={props.CourseUrl} target='_blank'>
            <img src={props.ImageUrl} className="max-w-xs rounded-t-3xl"/>
            <p className="text-xl ml-6 my-2"><b>{props.CourseName}</b></p>
            <p className="ml-6 mb-4"> {props.Time} | {props.Language} | {props.Enrolled} </p>
        </a>
    </div>
  )
}
