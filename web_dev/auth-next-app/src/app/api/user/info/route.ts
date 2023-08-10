import { NextRequest, NextResponse } from 'next/server';

import { getDataFromToken } from '@/helpers/getDataFromToken';
import User from '@/models/user.model';
import { connect } from '@/db/db.config';

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);

    const user = await User.findById(userId).select('-password');

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
