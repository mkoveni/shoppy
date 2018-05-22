<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Money implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->check($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute must be money (e.g 3.00 or 43.20)';
    }

    protected function check($value)
    {
        return preg_match('/^\d*(\.\d{1,2})?$/', $value);
    }
}
