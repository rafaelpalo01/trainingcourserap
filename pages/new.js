import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';


const NewCourse = () => {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', contact: '', address: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();
    

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                enrollCourse();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const enrollCourse = async () => {
        try {
            const res = await fetch('https://trainingcourserap.azurewebsites.net/api/civilcourse', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/enroll");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.firstName) {
            err.firstName = 'First Name is required';
        }
        if (!form.lastName) {
            err.lastName = 'Last Name is required';
        }
        if (!form.email) {
            err.email = 'Email is required';
        }
        if (!form.contact) {
            err.contact = 'Contact is required';
        }
        if (!form.address) {
            err.address = 'Address is required';
        }
        return err;
    }

    return (
        <div className="bg-slate-200">
        <div className="form-container md:ml-20 pb-20 ml-4">
            <h1 className="font-bold text-2xl pt-6">Enroll Course</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <div className='md:flex'>
                                <div>
                            <Form.Input
                                fluid
                                error={errors.firstName ? { content: 'Please enter your First Name', pointing: 'below', className: 'text-red-400' } : null}
                                label='First Name'
                                placeholder='First Name'
                                name='firstName'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.lastName ? { content: 'Please enter your Last Name', pointing: 'below', className: 'text-red-400' } : null}
                                label='Last Name'
                                placeholder='Last Name'
                                name='lastName'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.email ? { content: 'Please enter your email', pointing: 'below', className: 'text-red-400' } : null}
                                label='Email'
                                placeholder='ex. rafpalo@gmail.com'
                                name='email'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.contact ? { content: 'Please enter your Course Code', pointing: 'below', className: 'text-red-400 uppercase' } : null}
                                label='Course Code'
                                placeholder='ex. CE108'
                                name='contact'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                error={errors.address ? { content: 'Please enter your address', pointing: 'below', className: 'text-red-400' } : null}
                                label='Address'
                                placeholder='City, State'
                                name='address'
                                onChange={handleChange}
                            />
                            <div className="pt-6 pb-10">
                            <Button className="bg-amber-600 hover:bg-amber-800 rounded p-1 text-white" type='submit'>Enroll</Button></div>
                            </div>
                            <div className='flex md:ml-20 ml-2 md:text-lg text-xs'>
                                <div className='text-center'>
                            <div className='font-bold align-center pb-1 border-b-4 border-gray-600'>Course Code</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE101</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE102</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE103</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE104</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE105</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE106</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE107</div>
                            <div className='pt-4 border-b-2 border-gray-300'>CE108</div></div>
                            <div className='text-left md:ml-20 ml-4'>
                            <div className='font-bold align-center pb-1 border-b-4 border-gray-600'>Course Title</div>
                            <div className=''>
                            <div className='pt-4 border-b-2 border-gray-300'>Supervising Heavy Equipment Operation During Construction</div>
                            <div className='pt-4 border-b-2 border-gray-300'>Supervising Electrical Installation in Building Construction</div>
                            <div className='pt-4 border-b-2 border-gray-300'>Methods and Techniques in Welding Works and Inspection for Supervisors</div>
                            <div className='pt-4 border-b-2 border-gray-300'>Heavy Equipment Maintenance</div>
                            <div className='pt-4 border-b-2 border-gray-300'>Advance Course for Scaffold Erectors</div>
                            <div className='pt-4 border-b-2 border-gray-300'>ETABS</div>
                            <div className='pt-4 border-b-2 border-gray-300'>Revit Stucture Training - BIM Sturctural Detailing</div>
                            <div className='pt-4 border-b-2 border-gray-300'>Quantity Surveying</div>
                            </div></div>
                            </div></div>
                            
                        </Form>
                }
            </div>
        </div>
        </div>
    )
    
}

export default NewCourse;