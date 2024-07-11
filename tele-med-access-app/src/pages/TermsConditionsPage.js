import React from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "../pages/styles/TermsCondition.css";

const TermsConditionsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="TermsandCondition">
        <PrimaryButton className='button' onClick={() => navigate(-1)}>Back</PrimaryButton>
        <div className="Termscontent">
          <h1>Terms of Use Agreement</h1>
          <section>
            <h2>Acceptance</h2>
            <p>
              Welcome to TeleMedAccess (TEMA). By accessing or using our
              platform, you agree to comply with and be bound by the following
              Terms and Conditions. These terms govern your use of our services,
              including our website, mobile applications, and other services.
              You must read the following terms and conditions carefully. This
              Terms of Use Agreement (“Agreement”) is a legal agreement between
              you and the developers of the TEMA app (Arinze, Bernard, and
              Isaac). It states the terms and conditions under which you may
              access and use the App and all written and other materials
              displayed or made available through the App. Please read these
              terms carefully. If you do not agree with any part of these terms,
              you must not use our services.
            </p>
            <p>
              Note that the Owner may revise this Agreement at any time by
              updating this post. Use of the App after such changes are posted
              will signify your acceptance of these revised terms. You should
              visit this page periodically to review this Agreement.
            </p>

            <h2>Medical Emergency</h2>
            <p>
              The TeleMedAccess (TEMA) platform is not intended for emergency
              medical situations. Do NOT use the app for medical emergencies.
              Contact your local emergency services immediately if you are
              experiencing one. TEMA does not provide emergency medical services
              or immediate assistance for life-threatening conditions.
            </p>

            <h2>No Physical Doctor-Patient Relationship</h2>
            <p>
              TEMA is an AI Doctor. Consultations provided via TEMA are virtual
              and should not replace in-person examinations, diagnoses, and
              treatment.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              TEMA AI doctor is provided on an "as is" and "as available" basis.
              We do not warrant the platform being uninterrupted, error-free, or
              free from viruses or other harmful components. To the fullest
              extent permitted by law, TEMA disclaims all warranties, express or
              implied, including but not limited to, implied warranties of
              merchantability and fitness for a particular purpose.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, TEMA, its affiliates,
              officers, directors, employees, and agents will not be liable for
              any indirect, incidental, special, or consequential damages
              arising from your use of the platform, even if we have been
              advised of the possibility of such damages. Our total liability to
              you for any claims arising out of or relating to your use of the
              platform is limited to the amount paid by you, if any, for
              accessing the platform.
            </p>

            <h2>Indemnity</h2>
            <p>
              You agree to indemnify and hold TEMA, its affiliates, officers,
              directors, employees, and agents harmless from any claims,
              liabilities, damages, losses, or expenses, including reasonable
              attorneys' fees, arising from or related to your use of the
              platform, your violation of these Terms and Conditions, or your
              violation of any rights of another.
            </p>

            <h2>Use of the App</h2>
            <p>
              You agree to use the platform only for lawful purposes and in
              accordance with these Terms and Conditions. You must not use the
              platform to engage in any fraudulent, abusive, or illegal
              activity.
            </p>

            <h2>Copyright</h2>
            <p>
              All content on the TEMA platform, including text, graphics, logos,
              images, and software, is the property of TEMA or its content
              suppliers and is protected by copyright laws. Unauthorized use of
              any content on the platform is strictly prohibited.
            </p>

            <h2>Limited License</h2>
            <p>
              TEMA grants you a limited, non-exclusive, non-transferable, and
              revocable license to access and use the platform for personal,
              non-commercial purposes. This license does not include any resale
              or commercial use of the platform or its content.
            </p>

            <h2>Linking</h2>
            <p>
              You may link to our platform, provided you do so in a way that is
              fair and legal and does not damage our reputation or take
              advantage of it. You must not establish a link in such a way as to
              suggest any form of association, approval, or endorsement on our
              part where none exists.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All intellectual property rights in the platform and its content
              are owned by TEMA or its licensors. You are not granted any rights
              in or to the platform or its content, except for the limited
              license to use the platform by these Terms and Conditions.
            </p>

            <h2>Software License and Ownership</h2>
            <p>
              The software that operates the TEMA platform is licensed, not
              sold, to you. TEMA retains all ownership rights to the software.
              You may not copy, modify, distribute, sell, or lease any part of
              our software.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You must not use the platform in any way that causes, or is likely
              to cause, the platform or access to it to be interrupted, damaged,
              or impaired in any way. You must not use the platform for any
              fraudulent or unlawful purpose.
            </p>

            <h2>User Account</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account information, including your username and password. You are
              responsible for all activities that occur under your account. If
              you believe your account has been compromised, you must notify us
              immediately.
            </p>

            <h2>Security and Privacy</h2>
            <p>
              We use advanced encryption and security measures to protect your
              personal and medical information. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot
              guarantee its absolute security. Please refer to our Privacy
              Policy for more details on how we handle your data.
            </p>

            <h2>Modification to App</h2>
            <p>
              TEMA reserves the right to modify, suspend, or discontinue the
              platform or any part of it at any time without notice. We are not
              liable to you or any third party for any modification, suspension,
              or discontinuation of the platform.
            </p>

            <h2>Use Prohibited Where Contrary to Law</h2>
            <p>
              Use of the platform is prohibited in any jurisdiction where such
              use would violate any law or regulation. You are responsible for
              compliance with all local laws applicable to your use of the
              platform.
            </p>

            <h2>Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of Nigeria and Ghana. Any disputes
              arising from these terms will be subject to the exclusive
              jurisdiction of the courts of the two countries.
            </p>

            <h2>Termination</h2>
            <p>
              TEMA reserves the right to terminate or suspend your account at
              any time, without notice, for any reason, including but not
              limited to, violation of these Terms and Conditions. Upon
              termination, your right to use the platform will immediately
              cease. You may terminate your account at any time by contacting
              our support team.
            </p>

            <h2>Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with our Privacy Policy and
              any other legal notices published by TEMA on the platform,
              constitute the entire agreement between you and TEMA concerning
              the platform. Any prior agreements or understandings, whether
              written or oral, are superseded by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsConditionsPage;
