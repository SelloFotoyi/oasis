import React, {useState, useEffect} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import {commerce} from '../../../lib/commerce';
import LoadGif from '../../LoadGif';

const AddressForm = ({checkoutToken, next}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();
  const errors = methods.errors;
  const history = useHistory();

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);
  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);
  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };
  const fetchSubdivisions = async (countrycode) => {
    const {subdivisions} = await commerce.services.localeListSubdivisions(
      countrycode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {country, region}
    );
    setShippingOptions(options);
    setShippingOption(options[0].price);
  };
  return (
    <div className='address'>
      <h3 className='address__title'>Shipping details</h3>
      {/* {shippingCountry ? ( */}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <input
            type='text'
            placeholder='First name'
            name='firstName'
            ref={methods.register({required: 'required field'})}
          />
          {errors.firstName && (
            <p style={{color: 'red', borderBottom: '1rem'}}>
              {errors.firstName.message}
            </p>
          )}
          <input
            type='text'
            placeholder='Last name'
            name='lastName'
            ref={methods.register({required: 'reuired field'})}
          />
          {errors.lastName && (
            <p style={{color: 'red', borderBottom: '1rem'}}>
              {errors.lastName.message}
            </p>
          )}
          <input
            type='text'
            placeholder='Street address'
            name='address1'
            ref={methods.register({required: 'required field'})}
          />
          {errors.address1 && (
            <p style={{color: 'red', borderBottom: '1rem'}}>
              {errors.address1.message}
            </p>
          )}
          <input
            type='text'
            placeholder='City'
            name='city'
            ref={methods.register({required: 'required field'})}
          />
          {errors.city && (
            <p style={{color: 'red', borderBottom: '1rem'}}>
              {errors.city.message}
            </p>
          )}
          <input
            type='text'
            placeholder='Email address'
            name='email'
            ref={methods.register}
          />
          <input
            type='number'
            placeholder='Phone numbers'
            name='phone'
            ref={methods.register({
              required: true,
              minLength: {
                value: 10,
                message: 'mininmum of 10 digits expected',
              },
            })}
          />
          {errors.phone && (
            <p style={{color: 'red', borderBottom: '1rem'}}>
              {errors.phone.message}
            </p>
          )}
          <select
            name='shippingCountry'
            ref={methods.register}
            onChange={(e) => setShippingCountry(e.target.value)}
          >
            {Object.entries(shippingCountries)
              .map(([code, name]) => ({id: code, label: name}))
              .map((item) => (
                <option className='option' key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
          </select>
          <select
            name='shippingSubdivision'
            ref={methods.register}
            onChange={(e) => setShippingSubdivision(e.target.value)}
          >
            {Object.entries(shippingSubdivisions)
              .map(([code, name]) => ({id: code, label: name}))
              .map((item) => (
                <option className='option' key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
          </select>
          <select
            name='shippingOption'
            ref={methods.register}
            onChange={(e) => setShippingOption(e.target.value)}
          >
            {shippingOptions
              .map((sO) => ({
                id: sO.id,
                label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
                price: sO.price.formatted_with_symbol,
              }))
              .map((item) => (
                <option key={item.id} value={item.price}>
                  {item.label}
                </option>
              ))}
          </select>
          <div className='address__btns'>
            <button type='button' onClick={() => history.push('/cart')}>
              Cart
            </button>
            <button type='submit'>Next</button>
          </div>
        </form>
      </FormProvider>
      {/* ) : (
        <LoadGif />
      )} */}
    </div>
  );
};

export default AddressForm;
