import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import Link from 'next/link';

const Course = ({ course }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteCourse();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteCourse = async () => {
        const courseId = router.query.id;
        try {
            const deleted = await fetch(`https://trainingcourserap.azurewebsites.net/api/civilcourse/${courseId}`, {
                method: "Delete"
            });

            router.push("/enroll");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="bg-slate-200 pt-10 pb-36">      
        <div className="note-container ml-20">     
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1 className='font-bold text-xl pb-5 text-slate-700'>Enrollee Info </h1>
                    <div className="flex pb-2"><h1>First Name:</h1>
                    <h1 className="ml-2">{course.firstName}</h1></div>
                    <div className="flex pb-2"><h1>Last Name:</h1>
                    <h1 className="ml-2">{course.lastName}</h1></div>
                    <div className="flex pb-2"><h1>Email:</h1>
                    <h1 className="ml-2">{course.email}</h1></div>
                    <div className="flex pb-2"><h1>Course Code:</h1>
                    <h1 className="ml-2 uppercase">{course.contact}</h1></div>
                    <div className="flex pb-2"><h1>Address:</h1>
                    <h1 className="ml-2">{course.address}</h1></div>
                    <div className='flex pt-5'>
                    <Link href="/enroll">
                    <Button className=" bg-amber-600 hover:bg-amber-800 rounded p-1 text-white" primary>Back</Button>
                    </Link>
                    <Button className="ml-2 bg-amber-600 hover:bg-amber-800 rounded p-1 text-white" color='red' onClick={open}>Delete</Button>
                    </div>
                </>
            }
            <Confirm type="button" className='text-red-600 fixed inset-20 items-end flex'
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    </div>
    )
}

Course.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://trainingcourserap.azurewebsites.net/api/civilcourse/${id}`);
    const { data } = await res.json();

    return { course: data }
}

export default Course;