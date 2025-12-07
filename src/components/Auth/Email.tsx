'use client';
import { T } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export const Email = ({
  onSubmit,
  isLoading,
  successMessage,
  label = 'Email address',
  defaultValue,
  className,
  style,
}: {
  onSubmit: (email: string) => void;
  isLoading: boolean;
  successMessage?: string | null | undefined;
  label?: string;
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [email, setEmail] = useState<string>(defaultValue ?? '');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(email);
      }}
      data-testid="magic-link-form"
      className={className}
      style={style}
    >
      <div className="space-y-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground">
            {label}
          </Label>
          <div>
            <Input
              id="sign-in-email"
              name="email"
              type="email"
              value={email}
              disabled={isLoading}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete={'email'}
              placeholder="placeholder@email.com"
              required
            />
          </div>
        </div>
        <div>
          <Button className="w-full" type="submit">
            Login with Magic Link
          </Button>
        </div>
        <div>
          {successMessage ? (
            <T.P className="text-green-500 dark:text-green-400 text-center">
              {successMessage}
            </T.P>
          ) : null}
        </div>
      </div>
    </form>
  );
};
