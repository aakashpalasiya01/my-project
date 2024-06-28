"use client"
import Loginslider from "@/component/Login/LoginSlider/Loginslider"
import Link from "next/link"
import {useRef, useState} from "react"
import SimpleReactValidator from "simple-react-validator"
import InputMask from "react-input-mask"
import {ROUTES_PATH} from "@/utils/constant"
import {GuardInfoPropsType, GuardiansInfoType} from "./Registertype"

const GuardiansInfo = ({
  form,
  handleGaudianChange,
  nextStep,
  isOptionalFieldsEnteredCondn
}: GuardInfoPropsType) => {
  const simpleValidator = useRef<SimpleReactValidator>(
    new SimpleReactValidator()
  )
  const [, forceUpdate] = useState<number>(0);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      !isOptionalFieldsEnteredCondn &&
      simpleValidator.current.fieldValid("first_name0") &&
      simpleValidator.current.fieldValid("last_name0") &&
      simpleValidator.current.fieldValid("mobile0") &&
      simpleValidator.current.fieldValid("relation_with_kids0")
    ) {
      nextStep()
    } else if (
      isOptionalFieldsEnteredCondn &&
      simpleValidator.current.fieldValid("first_name0") &&
      simpleValidator.current.fieldValid("last_name0") &&
      simpleValidator.current.fieldValid("mobile0") &&
      simpleValidator.current.fieldValid("relation_with_kids0") &&
      simpleValidator.current.fieldValid("first_name1") &&
      simpleValidator.current.fieldValid("last_name1") &&
      simpleValidator.current.fieldValid("mobile1") &&
      simpleValidator.current.fieldValid("relation_with_kids1")
    ) {
      nextStep()
    } else {
      simpleValidator.current.showMessages()
      forceUpdate(1)
    }
  }
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
              {form?.guardians_info?.map(
                (item: GuardiansInfoType, index: number) => {

                  const regFnGinfoCondition = index == 1
                  ? null
                  : simpleValidator.current.message(
                      `first_name${index}`,
                      item.first_name,
                      "required|alpha",
                      {
                        messages: {
                          required:
                            "The first name field is required.",
                          alpha:
                            "The first name field should only contain letters."
                        }
                      }
                    );

                    const regLnGinfoCondition = index == 1
                    ? null
                    : simpleValidator.current.message(
                        `last_name${index}`,
                        item.last_name,
                        "required|alpha",
                        {
                          messages: {
                            required:
                              "The last name field is required.",
                            alpha:
                              "The last name field should only contain letters."
                          }
                        }
                      );

                      const regRwkGinfoCondition = index == 1
                      ? null
                      : simpleValidator.current.message(
                          `relation_with_kids${index}`,
                          item.relation_with_kids,
                          "required",
                          {
                            messages: {
                              required:
                                "The relation with kids field is required."
                            }
                          }
                        );

                      const regMobileGinfoCondtion = index == 1
                      ? null
                      : simpleValidator.current.message(
                          `mobile${index}`,
                          item.mobile,
                          "required|phone",
                          {
                            messages: {
                              required:
                                "The mobile number field is required.",
                              phone:
                                "The mobile number field must be a valid phone number."
                            }
                          }
                        )

                  return (
                    <>
                      <div className="Kid_info">
                        <Link href="">
                          {index == 0
                            ? "Guardian Info"
                            : "Additional Contact (Optional)"}
                        </Link>
                      </div>
                      <div className="row kids_row">
                        <div className="col-lg-6 kids_cols">
                          <div className="mb-3">
                            <label
                              htmlFor={`guardians_info.${index}.first_name`}
                              className="ele_lable"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name={`guardians_info.${index}.first_name`}
                              id={`guardians_info.${index}.first_name`}
                              value={item.first_name}
                              onChange={handleGaudianChange}
                              className="form-control ele_input"
                              placeholder="First Name"
                              onBlur={() => {
                                simpleValidator.current.showMessageFor(
                                  `first_name${index}`
                                )
                              }}
                            />
                            {isOptionalFieldsEnteredCondn
                              ? simpleValidator.current.message(
                                  `first_name${index}`,
                                  item.first_name,
                                  "required|alpha",
                                  {
                                    messages: {
                                      required:
                                        "The first name field is required.",
                                      alpha:
                                        "The first name field should only contain letters."
                                    }
                                  }
                                )
                              : regFnGinfoCondition }
                          </div>
                        </div>
                        <div className="col-lg-6 kids_cols">
                          <div className="mb-3">
                            <label
                              htmlFor={`guardians_info.${index}.first_name`}
                              className="ele_lable"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name={`guardians_info.${index}.last_name`}
                              id={`guardians_info.${index}.last_name`}
                              value={item.last_name}
                              onChange={handleGaudianChange}
                              className="form-control ele_input"
                              placeholder="Last Name"
                              onBlur={() => {
                                simpleValidator.current.showMessageFor(
                                  `last_name${index}`
                                )
                              }}
                            />
                            {isOptionalFieldsEnteredCondn
                              ? simpleValidator.current.message(
                                  `last_name${index}`,
                                  item.last_name,
                                  "required|alpha",
                                  {
                                    messages: {
                                      required:
                                        "The last name field is required.",
                                      alpha:
                                        "The last name field should only contain letters."
                                    }
                                  }
                                )
                              : regLnGinfoCondition }
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor={`guardians_info.${index}.relation_with_kids`}
                          className="ele_lable"
                        >
                          Relation with Kid
                        </label>
                        <select
                          className="ele_input form-control ele_select"
                          name={`guardians_info.${index}.relation_with_kids`}
                          id={`guardians_info.${index}.relation_with_kids`}
                          value={item.relation_with_kids}
                          onChange={handleGaudianChange}
                          onBlur={() => {
                            simpleValidator.current.showMessageFor(
                              `relation_with_kids${index}`
                            )
                          }}
                        >
                          <option value="">Please select</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Grand Parent">Grand Parent</option>
                          <option value="Aunt/Uncle">Aunt/Uncle</option>
                          <option value="Cousin">Cousin</option>
                          <option value="Friend">Friend</option>
                          <option value="Neighbour">Neighbour</option>
                        </select>
                        {isOptionalFieldsEnteredCondn
                          ? simpleValidator.current.message(
                              `relation_with_kids${index}`,
                              item.relation_with_kids,
                              "required",
                              {
                                messages: {
                                  required:
                                    "The relation with kids field is required."
                                }
                              }
                            )
                          : regRwkGinfoCondition }
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor={`guardians_info.${index}.mobile`}
                          className="ele_lable"
                        >
                          Mobile Number
                        </label>
                        <InputMask
                          mask="(999) 999-9999"
                          name={`guardians_info.${index}.mobile`}
                          id={`guardians_info.${index}.mobile`}
                          value={item.mobile || ""}
                          onChange={handleGaudianChange}
                          className="form-control ele_input"
                          placeholder="(000) 000-0000"
                          onBlur={() => {
                            simpleValidator.current.showMessageFor(
                              `mobile${index}`
                            )
                          }}
                        />

                        {isOptionalFieldsEnteredCondn
                          ? simpleValidator.current.message(
                              `mobile${index}`,
                              item.mobile,
                              "required|phone",
                              {
                                messages: {
                                  required:
                                    "The mobile number field is required.",
                                  phone:
                                    "The mobile number field must be a valid phone number."
                                }
                              }
                            )
                          : regMobileGinfoCondtion}
                      </div>
                    </>
                  )
                }
              )}
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
              <Link
                href={ROUTES_PATH.TERMSANDCONDITIONS}
                style={{textDecoration: "none", color: "black"}}
              >
                Terms of Service
              </Link>
              <span> and </span>
              <Link
                href={ROUTES_PATH.PRIVACYPOLICY}
                style={{textDecoration: "none", color: "black"}}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <Loginslider />
      </section>
    </div>
  )
}
export default GuardiansInfo
