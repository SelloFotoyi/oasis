import React, {useState, useEffect} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import {commerce} from '../../../lib/commerce';

const AddressForm = ({checkoutToken, next}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();
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
    console.log(shippingOption);
  };
  return (
    <div className='address'>
      <h3 className='address__title'>Shipping details</h3>
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
            ref={methods.register}
          />

          <input
            type='text'
            placeholder='Last name'
            name='lastName'
            ref={methods.register}
          />
          <input
            type='text'
            placeholder='Street address'
            name='address1'
            ref={methods.register}
          />
          <input
            type='text'
            placeholder='City'
            name='city'
            ref={methods.register}
          />
          <input
            type='text'
            placeholder='Email address'
            name='email'
            ref={methods.register}
          />
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
              Back to cart
            </button>
            <button type='submit'>Next</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
