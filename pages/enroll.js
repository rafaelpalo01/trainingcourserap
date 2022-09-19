import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Enroll = ({ courses }) => {
    return (   
      <div className="bg-slate-200 pt-10 pb-20">
      <div className="notes-container ml-20 pt-10 ">
        
        <h1 className="pb-5 font-bold text-slate-600">List of Enrolled</h1>
        <div className="grid wrapper">
          {courses.map(course => {
            return (
              <div key={course._id}>
                <Card>        
                  <Card.Content>
                    <div className='grid grid-cols-3 border-b-2 border-slate-400 pb-2'>
                    <div className="flex text-slate-700">
                    <Card.Header>
                      <Link href={`/${course._id}`}>
                        <a>{course.firstName}</a>
                      </Link>
                    </Card.Header>
                    <Card.Header className='ml-1'>
                      <Link href={`/${course._id}`}>
                        <a>{course.lastName}</a>
                      </Link>
                    </Card.Header>
                    </div>
                    <div className=''>
                    <Card.Header className=''>
                      <h1 className='font-bold text-slate-700 '>Course Code</h1>
                      <Link href={`/${course._id}`}>
                        <a className='uppercase text-center'> {course.contact}</a>
                      </Link>
                    </Card.Header></div>
                    <div className="mt-2">
                  <Card.Content extra>
                    <Link href={`/${course._id}`}>
                      <Button className="bg-amber-600 hover:bg-amber-800 rounded p-1 text-white hover:text-slate-200" primary>View</Button>
                    </Link>
                    <Link href={`/${course._id}/edit`}>
                      <Button className="ml-2 bg-amber-600 hover:bg-amber-800 rounded p-1 text-white " primary>Edit</Button>
                    </Link>
                  </Card.Content></div>
                    </div> 
                  </Card.Content>      
                </Card>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    )
  }
  
  Enroll.getInitialProps = async () => {
    const res = await fetch('https://trainingcourserap.azurewebsites.net/api/civilcourse');
    const { data } = await res.json();
  
    return { courses: data }
  }
  
  export default Enroll;