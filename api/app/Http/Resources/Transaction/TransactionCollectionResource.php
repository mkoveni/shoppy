<?php

namespace App\Http\Resources\Transaction;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\Product\ProductResource;

class TransactionCollectionResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'amount' => $this->amount,
            'product' => new ProductResource($this->product)
        ];
    }
}
