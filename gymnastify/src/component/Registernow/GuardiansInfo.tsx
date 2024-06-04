'use client';
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import InputMask from 'react-input-mask';
import { ROUTES_PATH } from "@/utils/constant";
import { GuardiansInfoProps } from "./Registertype";
import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const GuardiansInfo: React.FC<GuardiansInfoProps> = ({ nextStep, handleChange, form }) => {
  const simpleValidator = useRef<SimpleReactValidator>(
    new SimpleReactValidator()
  );
  const [, forceUpdate] = useState<number>(0);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange({
      guardians_info: form.guardians_info.map((guardian, index) =>
        index === 0 ? { ...guardian, [name]: value } : guardian
      ),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      nextStep();
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };


  return (
    <div className="login_area">
      <section className="login_block">
        <div className="login_group position-relative">
        <div className="login_frm">
          <div className="logo_title">
            <Link href={ROUTES_PATH.GUEST}>Gymnastify</Link>
          </div>
            <h4>Register Now</h4>
            <form onSubmit={handleSubmit}>
                  <>
                    <div className="Kid_info">
                      <Link href="">{"Guardian Info"}</Link>
                    </div>
                    <div className="row kids_row">
                      <div className="col-lg-6 kids_cols">
                        <div className="mb-3">
                          <label htmlFor={`guardians_info.first_name`} className="ele_lable">First Name</label>
                          <input
                            type="text"
                            className="form-control ele_input"
                            placeholder="First Name"
                            name="first_name"
                            value={form.guardians_info[0].first_name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 kids_cols">
                        <div className="mb-3">
                          <label htmlFor={`guardians_info.first_name`} className="ele_lable">Last Name</label>
                          <input
                         type="text"
                         className="form-control ele_input"
                         placeholder="Last Name"
                         name="last_name"
                         value={form.guardians_info[0].last_name}
                         onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                <label className="ele_lable">Relation with Kid</label>
                <select
                  name="relation_with_kids"
                  value={form.guardians_info[0].relation_with_kids}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {handleInputChange}}
                  className="ele_input form-control ele_select"
                >
                  <option value="">Please select</option>
                  <option value="sibling">sibling</option>
                  <option value="Grand Parent">Grand Parent</option>
                  <option value="Aunt/Uncle">Aunt/Uncle</option>
                  <option value="Cousin">Cousin</option>
                  <option value="Friend">Friend</option>
                  <option value="Neighbour">Neighbour</option>
                </select>
              </div>
                    <div className="mb-3">
                      <label htmlFor={`guardians_info.mobile`} className="ele_lable">Mobile Number</label>
                      <InputMask
                         mask="(999) 999-9999"
                         name="mobile"
                         className="form-control ele_input"
                         placeholder="(000) 000-0000"
                         value={form.guardians_info[0].mobile}
                         onChange={handleInputChange}
                      />
                    </div>
                    {/* <div className="Kid_info">
                      <Link href="">{"(Additional contact)"}</Link>
                    </div>
                    <div className="row kids_row">
                      <div className="col-lg-6 kids_cols">
                        <div className="mb-3">
                          <label htmlFor={`guardians_info.first_name`} className="ele_lable">First Name</label>
                          <input
                            type="text"
                            name={`guardians_info.first_name`}
                            id={`guardians_info.first_name`}
                            className="form-control ele_input"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 kids_cols">
                        <div className="mb-3">
                          <label htmlFor={`guardians_info.first_name`} className="ele_lable">Last Name</label>
                          <input
                            type="text"
                            name={`guardians_info.last_name`}
                            id={`guardians_info.last_name`}
                            className="form-control ele_input"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor={`guardians_info.relation_with_kids`} className="ele_lable">Relation with Kid</label>
                      <select
                        className="ele_input form-control ele_select"
                        name={`guardians_info.relation_with_kids`}
                        id={`guardians_info..relation_with_kids`}
                      >
                        <option value="">Please select</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Grand Parent">Grand Parent</option>
                        <option value="Aunt/Uncle">Aunt/Uncle</option>
                        <option value="Cousin">Cousin</option>
                        <option value="Friend">Friend</option>
                        <option value="Neighbour">Neighbour</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor={`guardians_info.mobile`} className="ele_lable">Mobile Number</label>
                      <InputMask
                        mask="(999) 999-9999"
                        className="form-control ele_input"
                        placeholder="(000) 000-0000"
                      />
                    </div> */}
                  </>
              <div className="btn_login">
                <button className="btn_animated btn_block primary_btn width_full">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="login_ftr">
          <p>
              <span>By continuing, you agree to Gymnastify </span>
              <Link href={ROUTES_PATH.TERMSANDCONDITIONS} style={{textDecoration: 'none',color:'black'}}>Terms of Service</Link>
              <span> and </span>
              <Link href={ROUTES_PATH.PRIVACYPOLICY} style={{textDecoration: 'none',color:'black'}}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
        <Loginslider />
      </section>
    </div>
  );
};
export default GuardiansInfo;
