import { connect } from '@/db/db.config';
import User from '@/models/user.model';
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    console.log({ reqBody });

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Please fill in all fields' },
        { status: 400 }
      );
    }

    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: 'User already exists. Please login instead' },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log({ newUser });

    // steps showed in tutorial
    // const newUser = new User({
    //   name,
    //   email,
    //   password: hashedPassword,
    // });
    // const savedUser = await newUser.save();
    // console.log({ savedUser });

    return NextResponse.json(
      {
        message: 'Signup successful!',
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
