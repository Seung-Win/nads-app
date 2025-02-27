import "./DataPrivacy.css"
import { Modal, Button } from "react-bootstrap";

interface DataPrivacyProps{
    show: boolean;
    handleClose: () => void;
}

function DataPrivacy({show, handleClose} : DataPrivacyProps){

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Data Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            The NCR Alliance of DOST Scholars ("we," "us," or "our") is
            committed to protecting the privacy of its members ("you" or
            "your"). This Data Privacy Notice explains how we collect, use,
            process, and protect your personal data in compliance with the Data
            Privacy Act of 2012 (Republic Act No. 10173) and other applicable
            data privacy laws and regulations.
          </p>
          <p>
            <strong>I. Information We Collect:</strong>
            <br />
            We collect personal data necessary for membership administration,
            communication, event organization, and other related activities.
            This may include:
            <ul>
              <li>
                Personal Information: Name, contact details (address, phone
                number, email address), DOST scholarship details (e.g.,
                scholarship type, program of study, university), and other
                information relevant to your membership.
              </li>
              <li>
                Academic Information: University, course, year level, and other
                academic-related information.
              </li>
              <li>
                Membership Information: Attendance records, participation in
                events, contributions to the organization, and other records
                related to your membership.
              </li>
              <li>
                Image and Video Data: Photos and videos taken during events and
                activities may be collected for documentation and promotional
                purposes.
              </li>
            </ul>
          </p>
          <p>
            <strong>II. How We Use Your Information:</strong>
            <br />
            We use your personal data for the following purposes:
            <ul>
              <li>
                Membership Management: Processing membership applications,
                maintaining membership records, communicating with members, and
                facilitating member participation in organizational activities.
              </li>
              <li>
                Communication: Sending important announcements, updates,
                newsletters, invitations to events, and other relevant
                information.
              </li>
              <li>
                Event Organization: Planning and organizing events, managing
                registrations, and coordinating logistics.
              </li>
              <li>
                Scholarship-Related Activities: Sharing information about
                scholarship opportunities, workshops, and other relevant
                resources.
              </li>
              <li>
                Research and Statistical Analysis: Conducting research and
                analysis to improve our programs and services, ensuring your
                data is anonymized and aggregated where applicable.
              </li>
              <li>
                Compliance with Legal Obligations: Complying with applicable
                laws, regulations, and legal processes.
              </li>
            </ul>
          </p>
          <p>
            <strong>III. Data Sharing and Disclosure:</strong>
            <br />
            We may share your personal data with:
            <ul>
              <li>
                DOST (Department of Science and Technology): For reporting
                purposes and to comply with DOST requirements.
              </li>
              <li>
                Partner Organizations: With your consent, we may share your
                information with partner organizations for collaborative
                projects and initiatives.
              </li>
              <li>
                Service Providers: We may engage third-party service providers
                (e.g., for event management, communication platforms) who may
                have access to your personal data. We ensure that these
                providers comply with data privacy standards.
              </li>
              <li>
                Legal Authorities: We may disclose your information to legal
                authorities if required by law or legal process.
              </li>
            </ul>
          </p>
          <p>
            <strong>IV. Data Security:</strong>
            <br />
            We implement reasonable security measures to protect your personal
            data from unauthorized access, use, disclosure, alteration, or
            destruction. These measures include physical, technical, and
            organizational safeguards. However, no data transmission over the
            Internet or electronic storage method is 100% secure.
          </p>
          <p>
            <strong>V. Data Retention:</strong>
            <br />
            We retain your personal data only for as long as necessary for the
            purposes for which it was collected, or as required by law.
          </p>
          <p>
            <strong>VI. Your Rights:</strong>
            <br />
            You have the following rights regarding your personal data:
            <ul>
              <li>
                Right to Access: You have the right to access and obtain a copy
                of your personal data.
              </li>
              <li>
                Right to Correction: You have the right to correct any
                inaccurate or incomplete personal data.
              </li>
              <li>
                Right to Erasure: You have the right to request the erasure of
                your personal data under certain circumstances.
              </li>
              <li>
                Right to Object: You have the right to object to the processing
                of your personal data under certain circumstances.
              </li>
              <li>
                Right to Data Portability: You have the right to receive your
                personal data in a structured, commonly used, and
                machine-readable format.
              </li>
            </ul>
          </p>
          <p>
            <strong>VII. Contact Us:</strong>
            <br />
            If you have any questions or concerns about this Data Privacy Notice
            or our data processing practices, please contact us at:
            <br />
            rc.nads.sei@gmail.com
          </p>
          <p>
            <strong>VIII. Changes to this Notice:</strong>
            <br />
            We may update this Data Privacy Notice from time to time. Any
            changes will be posted on our website. We encourage you to review
            this notice periodically.
          </p>
          <p>
            By submitting this form, you acknowledge that you have read and
            understood this Data Privacy Notice and consent to the collection,
            use, and processing of your personal data as described herein.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DataPrivacy;