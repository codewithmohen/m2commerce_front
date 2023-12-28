'use client';


<<<<<<<< HEAD:src/app/features/counter/page.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
========
import React from 'react'
import type { RootState } from '../../store/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slice'

export default function Module() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
>>>>>>>> main:src/app/features/counter/module.tsx

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}