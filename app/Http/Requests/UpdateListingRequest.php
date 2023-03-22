<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateListingRequest extends FormRequest
{
      /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'PATCH':
                # code...
                $rules = [
                    'name' => 'sometimes|required',
                    'property_type' => 'sometimes|required',
                    'sub_property_type' => 'sometimes|required',
                    'status' => 'sometimes|required',
                    'currency' => 'sometimes|required',
                    'currency_symbol' => 'sometimes|required',
                    'price' => 'sometimes|required|numeric',
                    'address' => 'sometimes|required',
                    'country' => 'sometimes|required',
                    'state' => 'sometimes|required',
                    'attributes' => 'sometimes|required',
                    'description' => 'sometimes|required',
                    'active' => 'sometimes|required',
                ];
                break;
            
            default:
                # code...
                $rules = [
                    'name' => 'required',
                    'property_type' => 'required',
                    'sub_property_type' => 'required',
                    'status' => 'required',
                    'currency' => 'required',
                    'currency_symbol' => 'required',
                    'price' => 'required|numeric',
                    'address' => 'required',
                    'country' => 'required',
                    'state' => 'required',
                    'attributes' => 'required',
                    'description' => 'required',
                    'active' => 'required',
                ];
                break;
        }
        return $rules;
    }

    public function messages()
    {
        return [
            'name.required' => 'Property name is required!',
            'property_type.required' => 'Property type is required!',
            'sub_property_type.required' => 'Property sub-type is required!',
            'status.required' => 'Status is required!',
            'currency.required' => 'Currency is required!',
            'currency_symbol.required' => 'Currency symbol is required!',
            'price.required' => 'Price is required!',
            'price.numeric' => 'Price should be a number!',
            'address.required' => 'Address is required!',
            'country.required' => 'Country is required!',
            'state.required' => 'State/Region/Province is required!',
            'attributes.required' => 'Attributes is required!',
            'description.required' => 'Description is required!',
            'active.required' => 'Active is required!',
        ];
    }

    /**
     *  Filters to be applied to the input.
     *
     * @return array
     */
    public function filters()
    {
        return [
            'name' => 'trim|capitalize',
            'property_type' => 'trim|lowercase',
            'sub_property_type' => 'trim|lowercase',
            'status' => 'trim|lowercase',
            'currency' => 'trim|lowercase',
            'currency_symbol' => 'trim|lowercase',
            'price' => 'trim|lowercase',
            'address' => 'trim|lowercase',
            'country' => 'trim|lowercase',
            'state' => 'trim|lowercase',
            'attributes' => 'trim|lowercase',
            'description' => 'trim|lowercase',
            'active' => 'trim',
        ];
    }
}
