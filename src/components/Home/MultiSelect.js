import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd';


export default function MultiSelect({options, handleChange, type}) {

  const Option = Select.Option;
  const mappedOptions = options.map((item) => (<Option key={item.id} value={item.title}>{item.title}</Option>));

  const handleWrapper = (value) => {
    handleChange(value, type)
  };

  return(
    <div>
      <Select
        mode="multiple"
        style={{width: '20%'}}
        onChange={handleWrapper}
        allowClear
      >
        {mappedOptions}
      </Select>
    </div>
  );
}

MultiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};