import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import Menubar from '../components/common/Menubar'
import MiniHero from '../components/common/MiniHero'

const FAQs = () => {
    return (
        <>
            <Menubar />
            <MiniHero title={'Frequently Asked Questions'} />
            <Container>
                <Row>
                    <Col>


                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Refund Status: Common Questions</Accordion.Header>
                                <Accordion.Body>
                                    <p> <strong> When will I receive my refund?</strong></p>
                                    <p>Refund requests are submitted immediately to your payment processor or financial institution after <strong>My-learnar</strong> has received and processed your request. It may take  5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.</p>
                                    <p>If you requested a refund within 24 hours of purchasing the course, however, it may be processed as a purchase reversal (please see below for more information).</p>
                                    <p>I requested a refund more than 10 business days ago, but I still do not see it in my bank account. Where is my refund?</p>
                                    <p>As noted above, it may take 5 to 10 business days to post the funds in your account after <strong>My-learnar</strong> has processed your refund request, depending on your financial institution or location. Some refunds, however, may not post to your account for up to 30 days. If it has been more than 10 business days since the refund was processed by <strong>My-learnar</strong>, please contact your bank directly to inquire about the status of the refund. If the bank does not see the refund in their records, please contact <strong>My-learnar</strong> Support by clicking Contact Us.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Payment Methods on <strong> My-learnar</strong></Accordion.Header>
                                <Accordion.Body>
                                    <p> <strong> Our Payment Methods</strong></p>
                                    <p>Depending on your device, location, and what country your <strong>My-learnar</strong> account is registered in, your payment options may include the following:</p>
                                    <p>Apple App Store and Google Play: you can also purchase courses using our mobile app.</p>
                                    <p> On the <strong>My-learnar</strong> iOS app, courses are available for purchase through the Apple App Store and the platform’s payment methods.</p>
                                    <p>Depending on your location, courses on the <strong>My-learnar</strong> Android app are available for purchase through <strong>My-learnar</strong>’s checkout system or Google Play (and that platform’s payment methods).</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Lifetime Access</Accordion.Header>
                                <Accordion.Body>
                                    <p>One of the best things about <strong>My-learnar</strong> is that you can login to your account from virtually anywhere, whenever you want, and access your courses easily! We strongly believe that students will benefit from the limitless educational possibilities this feature presents.</p>
                                    <p>Once you purchase a course, you'll have access for life, provided that your account is in good standing and <strong>My-learnar</strong> continues to have a license to that course.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How to Refund a Course</Accordion.Header>
                                <Accordion.Body>
                                    <p>We want you to be satisfied, so all eligible courses purchased on <strong>My-learnar</strong> can be refunded within 30 days. For whatever reason, if you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.</p>
                                    <p>Most refunds are returned via the original payment method. Please note that certain restrictions may apply and some purchases may only be eligible for credit refunds. Learn more about our refund policy.</p>
                                    <p>Refund requests cannot be submitted in the <strong>My-learnar</strong> mobile app (please see the Requesting a refund on a mobile device section below).</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FAQs