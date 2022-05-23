<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
{
    function addLead(Request $request){

        $lead=new Lead;
        $lead->full_name=$request->input('full_name');
        $lead->email=$request->input('email');
        $lead->phone=$request->input('phone');
        $lead->referer=$request->headers->get('referer');
        $lead->save();

        return response()->json(['success'=>true]);
    }

    function listLeads(Request $request){

        $lead=Lead::paginate();
        return response()->json(['data'=>$lead]);
        
    }
}
