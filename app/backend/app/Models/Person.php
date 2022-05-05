<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $table = "person";

    protected $fillable = [
      'nombres',
      'apellidos',
      'tipoID',
      'numeroID',
      'fechaNaci',
      'contrasena'
    ];
}
