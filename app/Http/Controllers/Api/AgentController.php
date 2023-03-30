<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;

class AgentController extends Controller
{
    //
    public function index()
    {
        //
        return response()->json(Admin::paginate());
    }

    public function show($id)
    {
        //
        return Admin::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        //
        $agent = Admin::findOrFail($id);
        $this->authorize('update', $agent);
        $agent->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Agent Updated Successfully!",
        ], 200);
    }

    public function destroy($id)
    {
        $agent = Admin::findOrFail($id);
        $this->authorize('update', $agent);
        $agent->delete();

        return response()->json([
            'status' => true,
            'message' => "Agent Deleted Successfully!"
        ]);
        
    }
}
