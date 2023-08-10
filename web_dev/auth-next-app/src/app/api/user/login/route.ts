import { connect } from '@/db/db.config';
import User from '@/models/user.model';
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log({ reqBody });

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Please fill in all fields' },
        { status: 400 }
      );
    }

    // check if user exists or not
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'User does not exists. Please signup instead' },
        { status: 400 }
      );
    }

    // check if password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 400 }
      );
    }

    console.log({ user });

    // token data
    const tokenData = {
      id: user._id,
    };

    // generate token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    const response = NextResponse.json(
      {
        message: 'Login successful!',
      },
      { status: 201 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
