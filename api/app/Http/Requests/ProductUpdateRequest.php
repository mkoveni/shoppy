<?php

namespace App\Http\Requests;

use App\Rules\Money;
use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'nullable|required|min:3',
            'description' => 'nullable|required|min:10',
            'price' => ['nullable','required', new Money]
        ];
    }
}
