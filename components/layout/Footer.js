import Image from 'next/image'

export default function Footer() {
    return (
        <div className="border-top bg-light">
            <div className="container d-flex flex-column py-5">
                <div className="d-flex flex-row border-bottom pb-3">
                    <div className="flex-column border-end px-5 py-5">
                        <Image src={ '/static/img.jpg' } alt={ '' } width="150" height="150"/>
                        <p className="text-secondary text-break mt-4">
                            For all the information you need, contact us via email
                         or phone number.
                        </p>
                        <p className="text-danger">Email:</p>
                        <p className="text-danger">Phone number:</p>
                    </div>
                    <div className="flex-column px-5 py-5 border-end">
                        <p className="text-danger">Need help?</p>
                        <p className="text-danger fw-bold text-decoration-underline fs-3 mt-5">Phone Number</p>
                        <p className="text-secondary text-break pt-5">
                            If you need support, please contact us via the email below.
                        </p>
                        <p className="text-danger pt-5">Email:</p>
                    </div>
                    <div className='flex-column px-5 py-5'>
                        <p className="text-secondary text-break">We work from Monday to Friday.</p>
                        <p className="text-warning mt-5">From 08:00 to 16:00.</p>
                        <p className="text-danger mt-5">Address:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}