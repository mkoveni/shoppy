<?php

namespace App\Http\Resources\Transaction;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\TransactionTypeResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' =>$this->id,
            'amount' => $this->amount,
            'discount' => $this->discount,
            'type' => $this->type,
            'item' => $this->product,
            'date' => $this->created_at->toDateTimeString()
        ];
    }
}
