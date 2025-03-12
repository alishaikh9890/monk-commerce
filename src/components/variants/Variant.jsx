import React from 'react'

const Variant = ({id, title, delVariant, vlength, pro_id}) => {
  return (
    <div className='Prod' key={id}>
                                        <span >⋮⋮</span>

                                        <div className='d-flex shadow-input w-75 position-relative overflow-hidden rounded-pill'>
                                            <input type='text' value={title} className='rounded-0 form-control border-0 bg-white' disabled placeholder='Select Product' />
                                        </div>

                                        {!status ? (
                                            <div>
                                            
                                            </div>
                                        ) : (
                                            <div className="row g-1 align-items-center">
                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        placeholder=""
                                                        value="0"
                                                        className="form-control rounded-pill shadow-1"
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <select
                                                        className="form-select rounded-pill"
                                                        aria-label="Default select example"
                                                    >
                                                        <option>% off</option>
                                                        <option >flat off</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}
                                        {
                                            vlength>=2 &&
                                            <div className="">
                                            <span
                                                onClick={() => delVariant(pro_id, id)}
                                                className="btn btn-close btn-sm "
                                            ></span>
                                        </div>
                                        }

                                    </div>
  )
}

export default Variant