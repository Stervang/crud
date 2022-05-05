<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Person;
Use Log;

class PersonController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
        $data = Person::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nombres'] = $request['nombres'];
        $data['apellidos'] = $request['apellidos'];
        $data['tipoID'] = $request['tipoID'];
        $data['numeroID'] = $request['numeroID'];
        $data['fechaNaci'] = $request['fechaNaci'];
        $data['contrasena'] = $request['contrasena'];
        Person::create($data);
        return response()->json([
            'message' => "Creado Exitosamente",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Person::find($id)->delete();
        return response()->json([
            'message' => "Eliminado",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Person::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nombres'] = $request['nombres'];
        $data['apellidos'] = $request['apellidos'];
        $data['tipoID'] = $request['tipoID'];
        $data['numeroID'] = $request['numeroID'];
        $data['fechaNaci'] = $request['fechaNaci'];
        $data['contrasena'] = $request['contrasena'];
        Person::find($id)->update($data);
        return response()->json([
            'message' => "Actualizacion exitosa",
            'success' => true
        ], 200);
      }
}
