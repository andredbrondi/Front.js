import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default function App() {
    const [clickCount, setClickCount] = useState(0);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.title}>Aplicação Mobile Foda</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Bem-vindo à minha aplicação personalizada! Aqui está um botão:</Text>
                <Button
                    title={`Clique Aqui (${clickCount})`}
                    onPress={() => setClickCount(clickCount + 1)}
                    color="#333"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>&copy; 2024 Minha Empresa</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: '#333',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    footer: {
        backgroundColor: '#333',
        padding: 10,
    },
    footerText: {
        color: '#fff',
        textAlign: 'center',
    },
});
