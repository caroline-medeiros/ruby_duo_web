"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container, Card, Title, InputGroup, Label, Input, Button, ErrorMsg, FooterText } from './styles';

export default function SignupView() {
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user: {
            name, 
            email, 
            password,
            password_confirmation: password
          }
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Conta criada com sucesso! Faça login para continuar.');
        router.push('/login');
      } else {
        const msg = data.errors ? data.errors.join(', ') : 'Erro ao criar conta';
        setError(msg);
      }
    } catch (err) {
      setError('Falha na conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Criar Conta</Title>
        
        {error && <ErrorMsg>{error}</ErrorMsg>}

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Nome</Label>
            <Input 
              type="text" 
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input 
              type="email" 
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Senha</Label>
            <Input 
              type="password" 
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </InputGroup>

          <Button type="submit" disabled={loading}>
            {loading ? 'CRIANDO...' : 'CADASTRAR'}
          </Button>
        </form>

        <FooterText>
          Já tem conta? <Link href="/login">Faça Login</Link>
        </FooterText>
      </Card>
    </Container>
  );
}