'use client';
import { ArrowLeftIcon, MailIcon } from 'lucide-react';

import type React from 'react';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface IConfirmationPendingCardProps {
  message: string;
  heading: string;
  resetSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>;
  resendEmail?: () => void;
}

export function EmailConfirmationPendingCard({
  message,
  heading,
  resetSuccessMessage,
  resendEmail,
}: IConfirmationPendingCardProps) {
  const router = useRouter();
  return (
    <div>
      <Card className="w-full md:min-w-[440px] mx-auto mt-10 items-center">
        <CardHeader>
          <MailIcon className="size-10 mx-auto mb-4" />
          <CardTitle className="text-center">{heading}</CardTitle>
          <CardDescription className="text-center">{message}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button
            variant="secondary"
            onClick={() => {
              resetSuccessMessage(null);
              router.push('/login');
            }}
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to login
          </Button>
        </CardFooter>
      </Card>
      {resendEmail && (
        <p className="text-center mt-4">
          Didn't receive the email?{' '}
          <Button
            className="font-bold px-0"
            variant="link"
            onClick={resendEmail}
          >
            Click to resend
          </Button>
        </p>
      )}
    </div>
  );
}
