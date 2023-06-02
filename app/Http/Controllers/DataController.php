<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class DataController extends Controller
{
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $data = User::find($request->id);

        if (!$data) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        $data->name = $request->input('name');
        $data->email = $request->input('email');
        $data->save();

        return response()->json(['message' => 'Data berhasil diupdate'], 200);
    }
}
