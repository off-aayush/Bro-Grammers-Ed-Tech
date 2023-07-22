import React from 'react';

export default function CoursesItem (props) {
  return (
    <div className=" cursor-pointer border-2 border-gray-300 dark:border-neutral-600 rounded-t-3xl rounded-b-2xl hover:shadow-xl hover:shadow-gray-400">
        <a href={props.CourseUrl} target='_blank' rel="noreferrer">
            <img src={props.ImageUrl} className="max-h-56 rounded-t-3xl" alt="Course"/>
            <p className="text-xl m-4"><b>{props.CourseName}</b></p>
            <p className="m-4"> {props.Time} | {props.Language} | {props.Enrolled} Enrolled </p>
        </a>
    </div>
  )
}
