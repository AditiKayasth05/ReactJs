
import React from 'react';
import PropTypes from 'prop-types';

 function PropsValidate(props){
  return(
  <>

  <h2>Hello:{props.name}</h2>
  <h2>age:{props.age}</h2>
  </>
  );
}


 PropsValidate.propTypes = {
   name: PropTypes.string.isRequired,
   age: PropTypes.number.isRequired
};

PropsValidate.defaultProps ={

}
export default PropsValidate;
