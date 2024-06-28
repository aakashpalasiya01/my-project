/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import InputMask from "react-input-mask"
import { GuardianInfoType, GuardiansPropInfoType } from "./ProfileType"

const GuardiansInfo = ({
  form,
  setForm,
  simpleValidator,
  handleBlur,
  forceUpdate,
  setIsValidatorVisible,
  simpleValidatorOptional
}: GuardiansPropInfoType) => {
  const handleGaudianChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    name: string
  ) => {
    setForm((prevForm: GuardianInfoType) => {
      let guardians_info = [...prevForm.guardians_info]
      const updatedGuardian = {
        ...guardians_info[index],
        [name]: event.target.value
      }
      guardians_info[index] = updatedGuardian
      return {
        ...prevForm,
        guardians_info
      }
    })
  }

  const opt_FN_Cond: boolean = form.guardians_info[1].first_name.length > 0
  const opt_LN_Cond: boolean = form.guardians_info[1].last_name.length > 0
  const opt_RWK_Cond: boolean =
    form.guardians_info[1].relation_with_kids.length > 0
  const opt_MOBILE_Cond: boolean =
    form.guardians_info?.[1]?.mobile.replace(/[^\d]/g, "")?.length > 0
  const isOptionalFieldsEnteredCondn: boolean =
    opt_FN_Cond || opt_LN_Cond || opt_RWK_Cond || opt_MOBILE_Cond

  useEffect(() => {
    const optionalFieldArray = [
      "last_name1",
      "first_name1",
      "mobile1",
      "relation_with_kids1"
    ]
    if (!isOptionalFieldsEnteredCondn) {
      optionalFieldArray?.forEach((item: any) => {
        simpleValidatorOptional.current.errorMessages[item] = null
      })
      forceUpdate((prev: any) => prev + 1)
      setIsValidatorVisible(true)
    } else {
      if (simpleValidatorOptional.current.allValid()) {
        setIsValidatorVisible(true)
      } else {
        setIsValidatorVisible(false)
      }
    }
  }, [isOptionalFieldsEnteredCondn, form.guardians_info])

  return (
    <div className="prouser_items">
      {form?.guardians_info?.map((item: GuardianInfoType, index: number) => {

        const profFnGinfoCondition = index == 0
          ? simpleValidator.current.message(
            `first_name${index}`,
            item.first_name,
            "required|alpha",
            {
              messages: {
                required: "The first name field is required.",
                alpha:
                  "The first name field should only contain letters."
              }
            }
          )
          : null
        const profLnGinfoCondition = index == 0
          ? simpleValidator.current.message(
            `last_name${index}`,
            item.last_name,
            "required|alpha",
            {
              messages: {
                required: "The last name field is required.",
                alpha:
                  "The last name field should only contain letters."
              }
            }
          )
          : null
        const profRwkGinfoCondition = index == 0
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
          : null
        const profMobileGinfoCondition = index == 0
          ? simpleValidator.current.message(
            `mobile${index}`,
            item.mobile,
            "required|phone",
            {
              messages: {
                required: "The mobile number field is required.",
                phone:
                  "The mobile number field must be a valid phone number."
              }
            }
          )
          : null

        return (
          <div key={item.id}>
            <div className="prouser_link">
              {index == 0 ? "Guardian Info" : "Additional Contact (Optional)"}
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor={`guardians_info.${index}.first_name`}
                    className="ele_lable"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name={`first_name${index}`}
                    id={`first_name${index}`}
                    value={item.first_name}
                    onChange={(e) =>
                      handleGaudianChange(e, index, "first_name")
                    }
                    className="form-control ele_input"
                    placeholder="First Name"
                    onBlur={() => {
                      if (index == 0) {
                        simpleValidator.current.showMessageFor(`first_name${index}`)
                        handleBlur(`first_name${index}`, index)
                      } else {
                        simpleValidatorOptional.current.showMessageFor(`first_name${index}`)
                        handleBlur(`first_name${index}`, index)
                      }
                    }}
                  />
                  {index == 1 && isOptionalFieldsEnteredCondn
                    ? simpleValidatorOptional.current.message(
                      `first_name${index}`,
                      item.first_name,
                      "required|alpha",
                      {
                        messages: {
                          required: "The first name field is required.",
                          alpha:
                            "The first name field should only contain letters"
                        }
                      }
                    )
                    : profFnGinfoCondition}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor={`guardians_info.${index}.last_name`}
                    className="ele_lable"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name={`last_name${index}`}
                    id={`last_name${index}`}
                    value={item.last_name}
                    onChange={(e) => handleGaudianChange(e, index, "last_name")}
                    className="form-control ele_input"
                    placeholder="Last Name"
                    onBlur={() => {
                      if (index == 0) {
                        simpleValidator.current.showMessageFor(`last_name${index}`)
                        handleBlur(`last_name${index}`, index)
                      } else {
                        simpleValidatorOptional.current.showMessageFor(`last_name${index}`)
                        handleBlur(`last_name${index}`, index)
                      }
                    }}
                  />
                  {index == 1 && isOptionalFieldsEnteredCondn
                    ? simpleValidatorOptional.current.message(
                      `last_name${index}`,
                      item.last_name,
                      "required|alpha",
                      {
                        messages: {
                          required: "The last name field is required.",
                          alpha:
                            "The last name field should only contain letters"
                        }
                      }
                    )
                    : profLnGinfoCondition}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor={`guardians_info.${index}.relation_with_kids`}
                    className="ele_lable"
                  >
                    Relation with Kid
                  </label>
                  <select
                    className="ele_input form-control ele_select"
                    name={`relation_with_kids${index}`}
                    id={`relation_with_kids${index}`}
                    value={item.relation_with_kids}
                    onChange={(e) =>
                      handleGaudianChange(e, index, "relation_with_kids")
                    }
                    onBlur={() => {
                      if (index == 0) {
                        simpleValidator.current.showMessageFor(`relation_with_kids${index}`)
                        handleBlur(`relation_with_kids${index}`, index)
                      } else {
                        simpleValidatorOptional.current.showMessageFor(`relation_with_kids${index}`)
                        handleBlur(`relation_with_kids${index}`, index)
                      }
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
                  {index == 1 && isOptionalFieldsEnteredCondn
                    ? simpleValidatorOptional.current.message(
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
                    : profRwkGinfoCondition}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor={`guardians_info.${index}.mobile`}
                    className="ele_lable"
                  >
                    Mobile Number
                  </label>
                  <InputMask
                    mask="(999) 999-9999"
                    name={`mobile${index}`}
                    id={`mobile${index}`}
                    value={item.mobile || ""}
                    onChange={(e) => handleGaudianChange(e, index, "mobile")}
                    className="form-control ele_input"
                    placeholder="(000) 000-0000"
                    onBlur={() => {
                      if (index == 0) {
                        simpleValidator.current.showMessageFor(`mobile${index}`)
                        handleBlur(`mobile${index}`, index)
                      } else {
                        simpleValidatorOptional.current.showMessageFor(`mobile${index}`)
                        handleBlur(`mobile${index}`, index)
                      }
                    }}
                  />

                  {index == 1 && isOptionalFieldsEnteredCondn
                    ? simpleValidatorOptional.current.message(
                      `mobile${index}`,
                      item.mobile,
                      "required|phone",
                      {
                        messages: {
                          required: "The mobile number field is required.",
                          phone:
                            "The mobile number field must be a valid phone number."
                        }
                      }
                    )
                    : profMobileGinfoCondition}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GuardiansInfo;
