import React from 'react'
import InputMask from 'react-input-mask';

const GuardiansInfo = ({ form, setForm, simpleValidator }: any) => {

    const handleGaudianChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number, name: string) => {
        setForm((prevForm: any) => {
            let guardians_info = [...prevForm.guardians_info];
            guardians_info[index][name] = event.target.value;
            return {
                ...prevForm,
                guardians_info
            }
        });
    }

    return (
        <div className="prouser_items">
            {form?.guardians_info?.map((item: any, index: number) => (
                <div key={item.id}>
                    <div className="prouser_link">
                        {index == 0 ? "Guardian Info" : "Additional Contact (Optional)"}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor={`guardians_info.${index}.first_name`} className="ele_lable">First Name</label>
                                <input
                                    type="text"
                                    name={`guardians_info.${index}.first_name`}
                                    id={`guardians_info.${index}.first_name`}
                                    value={item.first_name}
                                    onChange={(e) => handleGaudianChange(e, index, "first_name")}
                                    className="form-control ele_input"
                                    placeholder="First Name"
                                    onBlur={() => simpleValidator.current.showMessageFor(`first_name${index}`)}
                                />
                                {index == 1 ? null : simpleValidator.current.message(`first_name${index}`, item.first_name, 'required', { messages: { required: "This field is requred." } })}

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor={`guardians_info.${index}.last_name`} className="ele_lable">Last Name</label>
                                <input
                                    type="text"
                                    name={`guardians_info.${index}.last_name`}
                                    id={`guardians_info.${index}.last_name`}
                                    value={item.last_name}
                                    onChange={(e) => handleGaudianChange(e, index, "last_name")}
                                    className="form-control ele_input"
                                    placeholder="Last Name"
                                    onBlur={() => simpleValidator.current.showMessageFor(`last_name${index}`)}
                                />
                                {index == 1 ? null : simpleValidator.current.message(`last_name${index}`, item.last_name, 'required', { messages: { required: "This field is requred." } })}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor={`guardians_info.${index}.relation_with_kids`} className="ele_lable">Relation with Kid</label>
                                <select
                                    className="ele_input form-control ele_select"
                                    name={`guardians_info.${index}.relation_with_kids`}
                                    id={`guardians_info.${index}.relation_with_kids`}
                                    value={item.relation_with_kids}
                                    onChange={(e) => handleGaudianChange(e, index, "relation_with_kids")}
                                    onBlur={() => simpleValidator.current.showMessageFor(`relation_with_kids${index}`)}
                                >
                                    <option value="">Please select</option>
                                    <option value="sibling">sibling</option>
                                    <option value="Grand Parent">Grand Parent</option>
                                    <option value="Aunt/Uncle">Aunt/Uncle</option>
                                    <option value="Cousin">Cousin</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Neighbour">Neighbour</option>
                                </select>
                                {index == 1 ? null : simpleValidator.current.message(`relation_with_kids${index}`, item.relation_with_kids, 'required', { messages: { required: "This field is requred." } })}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor={`guardians_info.${index}.mobile`} className="ele_lable">Mobile Number</label>
                                <InputMask
                                    mask="(999) 999-9999"
                                    name={`guardians_info.${index}.mobile`}
                                    id={`guardians_info.${index}.mobile`}
                                    value={item.mobile || ''}
                                    onChange={(e) => handleGaudianChange(e, index, "mobile")}
                                    className="form-control ele_input"
                                    placeholder="(000) 000-0000"
                                    onBlur={() => { simpleValidator.current.showMessageFor(`mobile${index}`) }}
                                />

                                {index == 1 ? null : simpleValidator.current.message(`mobile${index}`, item.mobile, 'required', { messages: { required: "This field is requred." } })}
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default GuardiansInfo