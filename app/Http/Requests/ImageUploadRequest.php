<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImageUploadRequest extends FormRequest
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
        return [
            'id' => 'required|numeric', 
            'image' => 'image|mimes:png,jpg,jpeg,bmp,gif,svg,webp|max:10240',
        ];
    }

    public function messages()
    {
        return [
            'id.required' => 'Listing ID is required!',
            'id.numeric' => 'Listing ID should be a number!',
            'image.required' => 'Image is required!',
            'image.image' => 'Image format should be jpg, jpeg, png, bmp, gif, svg, or webp!',
            'image.max' => 'Image should be <= 10MB!',
        ];
    }
}
